import { VidOver } from '../'
import type { Meta } from '@storybook/react';

const meta: Meta<typeof VidOver> = {
    component: VidOver,
    title: 'Components/VidOver',
};

export default meta;

const videoPath = '/videos/movie.mp4'

const sourcePairs = [{ source: videoPath, type: 'video/mp4' }]

export const VidWithPoster = () => (
    <div>
        <VidOver
            style={{ height: '20rem', width: '100vw' }}
            poster={videoPath}
            sourcePairs={sourcePairs}
            muted={true}
            autoPlay={true}
        >
            simple placeholder text content for the vidover 
        </VidOver>
    </div>
)

VidWithPoster.story = {
    name: 'with poster',
}