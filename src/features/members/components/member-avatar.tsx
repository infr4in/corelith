import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface MemberAvatarProps {
  name: string;
  className?: string;
  fallbaackClassName?: string;
}

export const MemberAvatar = ({
  name,
  className,
  fallbaackClassName,
}: MemberAvatarProps) => {
  return (
    <Avatar
      className={cn(
        "size-5 rounded-full border border-neutral-300 transition",
        className,
      )}
    >
      <AvatarFallback
        className={cn(
          "flex items-center bg-neutral-200 font-medium text-neutral-500",
          fallbaackClassName,
        )}
      >
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};
