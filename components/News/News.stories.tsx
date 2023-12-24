import News from './News'
import mockNews from '../models/mockNews'
import { CssBaseline, Grid, ThemeProvider } from '@material-ui/core'
import theme from '@/theme'
import NewsCreator from './NewsCreator'

export default {
    title: 'Components/News',
    decorators: [
        (storyFn: () => React.ReactNode) => (
            <>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    {storyFn()}
                </ThemeProvider>
            </>
        )
    ],
    argTypes: {
        onSubmit: {
            action: 'News form submitted'
        },
        loading: {
            control: 'boolean'
        }
    }
}


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