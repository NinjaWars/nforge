// eslint-disable-next-line no-unused-vars
import testVideo from '../assets/videos/movie.mp4'
import image from '../assets/youtube.svg'
import { VidOver } from '../'
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/VidOver',
};

export default meta;

const sourcePairs = [{ source: testVideo, type: 'video/mp4' }]

export const VidWithPoster = () => (
    <div>
        <VidOver
            style={{ height: '20rem', width: '100vw' }}
            poster={image}
            sourcePairs={sourcePairs}
            muted={true}
            autoPlay={true}
        >
            top context placeholder text
        </VidOver>
    </div>
)

VidWithPoster.story = {
    name: 'with poster',
}