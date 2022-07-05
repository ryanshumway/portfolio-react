import React from "react";
import styled from "styled-components";
import "../assets/main.css";
import { darkTheme } from "../theme/theme";
import RyanImage from "../assets/images/ryan.jpg";
import { Card } from "./Card/Card";

const StyledATag = styled.a`
  text-decoration: underline;
  color: ${darkTheme.red100};
  cursor: pointer;
  transition: all ease-in-out 0.1s;

  &:hover {
    color: ${darkTheme.red300};
  }
`;

function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow flex flex-col md:text-left mb-16 md:mb-0 items-center content-center text-center">
                    <div className="flex flex-row items-center content-center gap-4 my-12 mb-12">
                        <img
                            src={RyanImage}
                            alt="ryan"
                            className="w-48 rounded-full mx-4"
                        />
                        <h1 className="title-font font-bold sm:text-4xl text-3xl w-1/2 mb-4 mx-4 text-white">
                            Hi, I'm Ryan 👋
                        </h1>
                    </div>
                    <br />
                    <h3
                        className="title-font font-serif text-2xl mb-4 max-w-3xl my-6"
                        style={{ color: `${darkTheme.purpleGray100}` }}
                    >
                        I{" "}
                        <StyledATag
                            href="https://dribbble.com/ryanshumzilla"
                            target="_blank"
                        >
                            design stuff
                        </StyledATag>
                        , help businesses make better products,{" "}
                        <StyledATag href="https://github.com/ryanshumway" target="_blank">
                            code front end
                        </StyledATag>
                        ,&nbsp;
                        <StyledATag
                            href="https://www.strava.com/athletes/87666862"
                            target="_blank"
                        >
                            ride my bike
                        </StyledATag>
                        , and enjoy{" "}
                        <StyledATag
                            href="https://www.goodreads.com/user/show/17318522-ryan-shumway"
                            target="_blank"
                        >
                            nerding out on books
                        </StyledATag>
                        .
                    </h3>
                </div>
            </div>
            <section className="flex flex-col">
                <div className="container mx-auto mb-4 flex px-10 flex-col items-center">
                    <p
                        className="font-sans text-2xl font-bold"
                        style={{ color: `${darkTheme.purpleGray100}` }}
                    >
                        What I'm currently doing
                    </p>
                    <Card title="Hello" />
                </div>
            </section>

        </section>
    );
}

export { About };
