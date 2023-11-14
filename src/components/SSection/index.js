import React from 'react'
import SBgAnimation from '../SBgAnimation'
import { SContainer, SBg, SLeftContainer, Img, SRightContainer, SInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './SStyle'
import SImg from '../../images/image.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const SSection = () => {
    return (
        <div id="about">
            <SContainer>
                <SBg>
                    <SBgAnimation />
                </SBg>
                <SInnerContainer >
                    <SLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </SLeftContainer>

                    <SRightContainer id="Right">

                        <Img src={SImg} alt="Sabo-slika" />
                    </SRightContainer>
                </SInnerContainer>

            </SContainer>
        </div>
    )
}

export default SSection