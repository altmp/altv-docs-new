import React, {useState} from "react";
import Admonition from '@theme/Admonition';

function Video(props) {

    const url = new URL(props.url);

    if (url.host === 'youtu.be' || url.hostname === 'youtube.com' || url.host === 'www.youtube.com') {
        const code = url.pathname.match(/([A-Za-z0-9_\-]+)\/?$/);
        if (!code[1]) {
            return <Admonition type="caution" title="Something went wrong...">Failed to parse YouTube URL: {props.url}</Admonition>
        }

        const query = new URLSearchParams;

        if (url.searchParams.has('t'))
            query.set('start', url.searchParams.get('t'));

        return <iframe width="560" height="315" src={"https://www.youtube-nocookie.com/embed/" + code[1] + '?' + query}
                       title="YouTube video player" frameBorder="0" className="youtube-video"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                       allowFullScreen></iframe>
    } else {

        return <Admonition type="caution" title="Something went wrong...">Unsupported video URL: {url}</Admonition>
    }
}

export default Video;