import { useState } from "react";
import Switch from 'react-switch';
import { useAccount, useConfig } from "wagmi";
import EthIconImg from 'assets/img/eth.png';
import Card from "components/Card";
import TokenInput from "components/TokenInput";
// import axios from "axios";
import { useWriteContract } from 'wagmi';
import { waitForTransactionReceipt } from 'wagmi/actions';
import { LAUNCHPAD_ADDRESS, THIRDWEB_STORAGE_CLIENT_ID } from "config";
import LaunchpadAbi from 'abi/launchpad.json';
import { parseEther } from "viem";
import { toast } from "react-toastify";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { EthIcon } from "components/Svg";

const storage = new ThirdwebStorage({
    clientId: THIRDWEB_STORAGE_CLIENT_ID,
});


export default function Create() {
    const { address } = useAccount();
    const router = useRouter();
    const { writeContractAsync } = useWriteContract();
    const config = useConfig();

    const [showOptionals, setShowOptionals] = useState(false);
    const [values, setValues] = useState<{
        name: string,
        symbol: string,
        description: string,
        image: File | string | null,
        website: string,
        twitter: string,
        telegram: string,
        snipeAmount: number,
    }>({
        name: '',
        symbol: '',
        description: '',
        image: null,
        website: '',
        twitter: '',
        telegram: '',
        snipeAmount: 0,
    });

    const [preview, setPreview] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setValues({ ...values, image: file });
            const reader = new FileReader();
            reader.onloadend = async () => {
                try {
                    setPreview(reader.result as string);
                } catch (error) {
                    console.log(error);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    const createCoin = async () => {
        let tokenAddress;
        const toastId = "create-coin";

        try {
            // const url = "https://beige-personal-nightingale-17.mypinata.cloud/ipfs/QmX6gzzqnazKvVUQptswKU6c43FFdM7iAL3LLr7JtpjGuv";
            const uri = await storage.upload(values.image);
            const { url }= await storage.download(uri);
            
            if (!url) {
                throw { shortMessage: "Failed to uplaod image" };
            }
            const tokenConfig = {
                name: values.name,
                symbol: values.symbol,
                initialSupply: 1_000_000_000_000_000_000_000_000_000n,
            };
            const metadataConfig = {
                ipfsHash: url,
                website: values.website,
                twitter: values.twitter,
                telegram: values.telegram,
                description: values.description,
                metadata: "",
            };
            console.log(values.snipeAmount.toString());
            const snipeConfig = {
                minAmountOut: parseEther(values.snipeAmount.toString()),
            };
            const curveParameters = {
                yMin: 51136363636n,
                yMax: 56250000000n,
            };

            const hash = await writeContractAsync({
                address: LAUNCHPAD_ADDRESS,
                abi: LaunchpadAbi,
                functionName: "createLaunchpadToken",
                args: [tokenConfig, metadataConfig, snipeConfig, curveParameters],
                value: parseEther(values.snipeAmount.toString()),
            });
            const receipt = await waitForTransactionReceipt(config, { hash });
            for (const log of receipt.logs) {
                if (
                    log.topics[0] ===
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
                ) {
                    tokenAddress = log.address;
                    console.log(tokenAddress);
                    toast.success("Coin created successfully!", { toastId });
                    router.push(`/trade/${tokenAddress}`);
                    break;
                }
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error?.shortMessage || "Failed to Create Coin", { toastId });
        } finally {
            setTimeout(() => toast.dismiss(toastId), 5000);
        }
    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[30px] my-10">Create Coin</h1>
            <div className="flex gap-10 flex-col sm:flex-row sm:items-start items-center">
                <div className="flex flex-col items-center gap-2 min-w-[320px] w-full">
                    <input name="name" value={values.name} onChange={onChange} className="input w-full" placeholder="Token Name" />
                    <input name="symbol" value={values.symbol} onChange={onChange} className="input w-full" placeholder="Token Symbol" />
                    <textarea name="description" value={values.description} onChange={onChange} className="input w-full" rows={2} placeholder="Description" />
                    <div className="flex items-center gap-2 w-full">
                        <input className="w-full" type="file" accept="image/*" onChange={handleImageChange} />
                        {preview && <Image src={preview} className="w-10 h-10 rounded-md" alt="meme coin" width={40} height={40} />}
                    </div>

                    <div className="flex items-center justify-start gap-2 w-full mb-1">
                        <label htmlFor="optionals">Show optional fields</label>
                        <Switch checkedIcon uncheckedIcon onColor="#2563EB" onChange={() => setShowOptionals(!showOptionals)} checked={showOptionals} />
                    </div>

                    {showOptionals && <>
                        <input name="website" onChange={onChange} value={values.website} className="input w-full" placeholder="Website" />
                        <input name="twitter" onChange={onChange} value={values.twitter} className="input w-full" placeholder="Twitter" />
                        <input name="telegram" onChange={onChange} value={values.telegram} className="input w-full" placeholder="Telegram" />
                    </>}

                    <TokenInput name="snipeAmount" amount={values.snipeAmount} onChange={onChange} tokens={[{ symbol: 'ETH', icon: EthIconImg }]} selectedSymbol={'ETH'} setSelectedSymbol={() => { }} placeholder={"Snipe Amount"} />

                    <div className="flex justify-between items-center w-full">
                        <p>Creation Cost</p>
                        <div className="flex gap-1 items-center">~0.002 <span className="text-indigo-500">ETH</span> <EthIcon className="w-4 h-4 rounded-full" /></div>
                    </div>

                    <button className="input w-full mt-5" onClick={createCoin}>Create Coin</button>
                </div>

                <Card token={{ ...values, ipfsHash: '', creator: address || '' }} preview={preview} />
            </div>
        </div>
    )
}