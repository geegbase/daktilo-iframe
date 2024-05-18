import { Avatar, Text, Button, Paper } from '@mantine/core';
import Link from 'next/link';

export function UserInfoAction({ avatar, title, href, alt }) {
    return (
        <Link style={{ textDecoration: 'none' }} href={href} target='_blank' >
            <Paper
                radius="md"
                p="lg"
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
                })}
            >
                <Avatar alt={alt} src={avatar} size={120} radius={120} mx="auto" />
                <Text ta="center" fz="lg" weight={500} mt="md">
                    {title}
                </Text>
            </Paper>
        </Link>

    );
};