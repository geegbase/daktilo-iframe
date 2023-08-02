import React from 'react'
import { createStyles, Avatar, Text, Group } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    icon: {
        color: 'gray',
    },

    name: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

}));



export function UserInfoIcons({ avatar, name, title, href, alt }) {
    const { classes } = useStyles();
    return (

        <Link style={{ textDecoration: 'none' }} href={href} target='_blank'>
            <Group noWrap>
                <Avatar alt={alt} src={avatar} size={94} radius="md" />
                <div>
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                        {title}
                    </Text>

                    <Text fz="lg" fw={500} className={classes.name}>
                        {name}
                    </Text>
                </div>
            </Group>
        </Link>
    );
}