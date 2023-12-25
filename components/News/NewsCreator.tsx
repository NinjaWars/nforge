import { useCallback, useEffect, useState } from 'react'
import { useForm, Controller } from "react-hook-form"
import {
    makeStyles,
    TextField,
    Grid,
    Button,
    Theme,
} from '@material-ui/core'
import { News as INews } from '@/components/models'
import News from './News'
import { SText } from '..'
import { Author } from '../models/Author'
import { User as userShape } from '../models/User'
//import { useUser } from '@/context/UserContext'

// React hook form: https://react-hook-form.com/get-started#IntegratingwithUIlibraries

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    author: {
        padding: '1rem 0'
    },
    submission: {
        padding: '1rem 0'
    }
}))


/**
 * Display a news entry
 */

interface CreateNewsProps {
    preview?: boolean,
    article?: INews,
    onSubmit: (e: any) => void,
    layouter?: React.FC,
    initialAuthor?: Author,
    loadingUser?: {
        user: userShape,
        loading: boolean,
    },
}

interface Inputs {
    title: string,
    content: string,
    author: string,
    tags: string,
}

/**
 * Create and preview a news entry/article
 * @TODO Integrate with MUI: https://react-hook-form.com/get-started#IntegratingwithUIlibraries
 * @TODO Replace the use of errors span with MUI equivalent
 */
const NewsCreator: React.VFC<CreateNewsProps> = ({ onSubmit, preview = true, article: initialArticle = undefined, initialAuthor = undefined, layouter = undefined, loadingUser }: CreateNewsProps) => {
    const classes = useStyles()
    const { control, handleSubmit, reset, formState: { errors, isSubmitSuccessful }, getValues } = useForm<Inputs>({ mode: 'onTouched' })
    const { loading, user } = loadingUser ?? { loading: true, user: undefined }
    const showPreview = preview && !loading && user
    const [finalArticle, setFinalArticle] = useState<INews>(initialArticle || {
        id: '',
        title: '',
        author: initialAuthor?.name || '',
        content: '',
        tags: '',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const memReset = useCallback(reset, [])
    const handleChange = () => {
        const vals = getValues()
        setFinalArticle({
            ...initialArticle,
            ...{
                title: vals.title,
                content: vals.content,
                tags: vals.tags,
                author: initialAuthor?.name || '',
            },
            id: '',
        })
    }
    useEffect(() => {
        if (isSubmitSuccessful) {
            memReset()
        }
    }, [isSubmitSuccessful, memReset])
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={4}>
                {' '}
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
                <form onSubmit={handleSubmit(onSubmit)} onChange={handleChange}>
                    <div>
                        <Controller
                            name="title"
                            control={control}
                            defaultValue={initialArticle?.title}
                            render={({ field }) => <TextField required {...field} label='Title' placeholder='Title for the article' />}
                        />
                        {errors.title && <span>This field is required</span>}
                    </div>
                    <div className={classes.author}>
                        Author: <SText loading={!finalArticle?.author}>{finalArticle?.author}</SText>
                    </div>
                    <div>
                        <Controller
                            name="content"
                            control={control}
                            defaultValue={initialArticle?.content}
                            render={({ field }) => <TextField required {...field} label='Content' placeholder='Body content for the article' />}
                        />
                    </div>
                    <div>
                        <Controller
                            name="tags"
                            control={control}
                            defaultValue={initialArticle?.tags}
                            render={({ field }) => <TextField {...field} label='Tags' placeholder='Comma separated tags' />}
                        />
                    </div>
                    <div className={classes.submission}>
                        <Button type='submit' variant='outlined'>Create News Article</Button>
                    </div>
                </form>
            </Grid>
            {showPreview && (
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    {(finalArticle?.title || finalArticle?.content) && (
                        <News article={finalArticle} />
                    )}
                </Grid>
            )}
        </Grid>
    )
}

export default NewsCreator
