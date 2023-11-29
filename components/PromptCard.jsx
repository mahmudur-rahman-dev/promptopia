"use client";

import {useState} from "react";
import Image from "next/image";
import {useSession} from "next-auth/react";
import {usePathname, useRouter} from "next/navigation";

const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
    const [copied, setCopied] = useState("");
    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="flex-1 felx justify-start items-center gap-3 cursor-pointer">
                    <Image
                        src={post && post.creator ? post.creator.image : "/assets/images/logo.svg"}
                        alt="user_image"
                        width="40"
                        height="40"
                        className={"rounded-full object-contain"}
                    />
                    <div className="flex flex-col">
                        <h3 className="font-satoshi font-semibold text-gray-900">
                            {post && post.creator ? post.creator.username : 'default name'}
                        </h3>
                        <p className="font-inter text-sm text-gray-500">
                            {post && post.creator ? post.creator.email : 'default email'}
                        </p>
                    </div>
                </div>

                <div className="copy_btn" onClick={() => {
                }}>
                    <Image
                        src={copied === post.prompt
                            ? "/assets/icons/tick.svg"
                            : "/assets/icons/copy.svg"
                        }
                        width={12}
                        height={12}
                    />
                </div>
            </div>
            <p>{post.prompt}</p>
            <p>
                {post.tag}
            </p>
        </div>
    );
};

export default PromptCard;