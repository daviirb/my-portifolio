import { GithubIcon } from "../icons/github-icon";
import { InstagramIcon } from "../icons/instagram-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";

import './social-btns.scss'

interface SocialBtnsProps {

}
export function SocialBtns(props : SocialBtnsProps){
    return(
        <div className="social">
            <a href="https://www.instagram.com/daviirb" target="_blank">
                <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/in/daviirb" target="_blank">
                <LinkedinIcon />
            </a>
            <a href="https://github.com/daviirb" target="_blank">
                <GithubIcon />
            </a>
        </div>
    )
}
