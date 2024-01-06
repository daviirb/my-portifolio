import { GithubIcon } from "../icons/github-icon";
import { InstagramIcon } from "../icons/instagram-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";

import './social-btns.scss'

interface SocialBtnsProps {

}
export function SocialBtns(props : SocialBtnsProps){
    return(
        <div className="social">
            <a href="">
                <InstagramIcon />
            </a>
            <a href="">
                <LinkedinIcon />
            </a>
            <a href="">
                <GithubIcon />
            </a>
        </div>
    )
}
