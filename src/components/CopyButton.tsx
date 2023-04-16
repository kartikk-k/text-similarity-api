"use client"

import { ButtonHTMLAttributes, FC } from 'react'
import { Button } from './ui/Button';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/utils';
import { Copy } from 'lucide-react';

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    valueToCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({ valueToCopy, className, ...props }) => {
    return (
        <Button {...props}
            variant='ghost'
            className={cn(className)}
            onClick={() => {
                navigator.clipboard.writeText(valueToCopy)
                toast.success('API key copied to clipboard!')
            }}>

            <Copy className='w-5 h-5 ' />
        </Button>
    );
}

export default CopyButton;