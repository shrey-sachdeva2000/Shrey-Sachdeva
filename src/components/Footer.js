import React from "react"
import styled from "styled-components"

import hi from "../images/hi.png"

const Wrapper = styled.div`
    height: 320px;
    @media (max-width: 415px) {
        height: 550px;
    }
`

const Container = styled.div`
    background-color: var(--main-font-color);
    height: 320px;
    margin-top: 70%;
    @media (max-width: 415px) {
        margin-top: 320%;
    }
`

const Credits = styled.p`
    color: var(--grey-color);
    margin-bottom: 2%;
    @media (max-width: 415px) {
        margin-bottom: 10%;
    }
`

const Link = styled.a`
    margin-left: 10px;
    text-decoration: none;
`

const Image = styled.img`
    height: 30px;
    display: inline-block;
    padding-top: 5px;
    padding-left: 15px;
`

const Button = styled.button`
    background-color: #303741;
    color: white;
    border: none;
    border-radius: 6px;
    display: block;
    margin: 0px auto;
    cursor: pointer;
    padding: 8px 20px;
`

const Title = styled.h2`
    padding-top: 70px;
    margin: 0px 5px;
    margin-bottom: 10px;
    @media (max-width: 415px) {
        font-size: 2rem;
    }
`

const Socials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
    color: #fff;
    @media (max-width: 415px) {
        margin-left: 0px;
        font-size: 0.9rem;
        margin-top: 10%;
    }
`
const ButtonText = styled.h2`
    display: inline;
`

function Footer() {
    return (
        <Wrapper>
            <Container>
                <Title>
                    Let's build beautiful,
                    <br />
                    meaningful things together.
                </Title>
                <p>Interested in collaborating? I'll buy the coffee.</p>
                <Link
                    className="mailto"
                    href="mailto:shreysachdeva.2000@gmail.com"
                >
                    <Button className="hi">
                        <ButtonText>Say Hi</ButtonText>
                        <Image src={hi} alt="Hi"></Image>
                    </Button>
                </Link>
                <Socials>
                    <Link href="https://github.com/shrey-sachdeva2000">
                        <p>GitHub</p>
                    </Link>
                    <Link href="https://github.com/shrey-sachdeva2000">
                        <p>LinkedIn</p>
                    </Link>
                    <Link href="https://github.com/shrey-sachdeva2000">
                        <p>Dribbble</p>
                    </Link>
                    <Link href="https://github.com/shrey-sachdeva2000">
                        <p>Behance</p>
                    </Link>
                    <Link href="https://github.com/shrey-sachdeva2000">
                        <p>Medium</p>
                    </Link>
                </Socials>
                <Credits>
                    Crafted with &hearts; by Shrey Sachdeva <br></br>&copy;
                    Shrey Sachdeva
                </Credits>
            </Container>
        </Wrapper>
    )
}

export default Footer
