import News from './News'
import mockNews from '../models/mockNews'
import { Grid, } from '@material-ui/core'
import NewsCreator from './NewsCreator'

import React from 'react'; // Add import statement for React

const newsStory = {
    title: 'Components/News',
    argTypes: {
        onSubmit: {
            action: 'News form submitted'
        },
        loading: {
            control: 'boolean'
        }
    }
};

export default newsStory; // Assign the object to a variable before exporting as the default module


export const NewsArea = (args: any) => {
    const { loading, ...rest } = args
    const articles: any[] = loading ? [{}] : mockNews
    return (
        <>
            {articles.map((article: any) => (
                <><News {...rest} article={article} /><br /><br /></>
            ))}
        </>
    )
}
NewsArea.args = {
    article: mockNews[Math.floor(Math.random() * mockNews.length)],
    className: 'cool-mock-news-story',
    dark: true,
    loading: false,
}

export const NewsCreatorBasic = (args: any) => {
    return (
        <>
            <NewsCreator {...args} />
        </>
    )
}
NewsCreatorBasic.args = {
    preview: true,
    article: {
        id: 'xxxx',
        title: 'whatever',
        author: 'Roy',
        content: 'Some news text lorem ipsum here',
        createdAt: '',
        updatedAt: '',
    },
    layouter: ({ children }: { children: React.ReactNode }) => <Grid item>{children}</Grid>
}