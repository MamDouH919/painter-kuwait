import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import LinksContent from '@/components/sections/LinksContent'
import { Container, Stack } from '@mui/material'
import React from 'react'

const Page = ({ params: { id } }: { params: { id: string } }) => {
    console.log(id)

    return (
        <Container maxWidth="lg">
            <Stack my={5} spacing={3} alignItems={"center"}>
                <CustomLink href={"/"}>الرجوع الي القائمة الرئسية </CustomLink>
                <PhoneStyle />
                <LinksContent id={id} />
            </Stack>
        </Container>
    )
}

export default Page
