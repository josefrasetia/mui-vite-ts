import { Avatar, useTheme } from "@mui/material";
import { MouseEvent as ReactMouseEvent } from 'react';
import styles from "./styles";
const InitialAvatar = (props: { name: string, onClick?: (event: ReactMouseEvent<HTMLDivElement>) => void, variant?: string }) => {
    const { name, onClick, variant = 'small' } = props;
    const theme = useTheme();
    const style = styles(theme);
    const stringToColor = (string: string) => {
        let hash = 0;
        let i;
    
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 10) - hash);
        }
        let color = "#";
    
        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `${value.toString(16)}`;
        }
    
        return color;
    };
    
    const stringAvatar = (name: string) => {
        const split = name.split(" ");
        const initials = split.length > 1 ? split[0][0] + split[1][0] : split[0][0];
        return {
            sx: {
                bgcolor: stringToColor(name),
                ...(variant === 'small') ? style.smallAvatar : (variant === 'large') ? style.bigAvatar : style.mediumAvatar,
            },
            children: initials,
            onClick: onClick,
        };
    };

    return <Avatar {...stringAvatar(name)} />
};

export default InitialAvatar;