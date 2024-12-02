"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { FileIcon, X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

interface FileUploadProps {
    onChange: (url?: string) => void;
    value: string;
    endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({
    onChange,
    value,
    endpoint
}: FileUploadProps) => {
    const [fileType, setFileType] = useState<string | null>(null);

    useEffect(() => {
        const fetchFileType = async () => {
            if (value) {
                try {
                    const response = await axios.head(value);
                    const contentType = response.headers["content-type"];
                    if (contentType.includes("image")) {
                        setFileType("image");
                    } else if (contentType === "application/pdf") {
                        setFileType("pdf");
                    } else {
                        setFileType(null);
                    }
                } catch (error) {
                    console.error("Error fetching file type:", error);
                    setFileType(null);
                }
            }
        };

        fetchFileType();
    }, [value]);

    if (value && fileType === "image") {
        return (
            <div className="relative h-20 w-20">
                <Image
                    fill
                    src={value}
                    alt="Upload"
                    className="rounded-full"
                />
                <button onClick={() => onChange("")}
                    className="bg-rose-500 text-white p-1 
                rounded-full absolute top-0 
                right-0 shadow-sm">
                    <X className="h-4 w-4" />
                </button>
            </div>
        )
    }

    else if (value && fileType === "pdf") {
        return (
            <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
                <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
                <a href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
                >
                    {value}
                </a>
                <button onClick={() => onChange("")}
                    className="bg-rose-500 text-white p-1 
                        rounded-full absolute -top-2 
                        -right-2 shadow-sm">
                    <X className="h-4 w-4" />
                </button>
            </div>
        )
    }
    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].url);
            }}
            onUploadError={(error: Error) => {
                console.log(error);
            }}

        />
    );
}

