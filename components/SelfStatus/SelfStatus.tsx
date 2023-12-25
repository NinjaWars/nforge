import { makeStyles, Theme } from '@material-ui/core/styles'
import { Health, NinjaClass, NinjaLevel, SText } from '..'
import { NinjaClassOption } from '..' // A type
import percentify from '@/utils/percentify'


export interface SelfStats {
    class: NinjaClassOption
    classDisplay: NinjaClassOption
    level: number
    kills: number,
    health?: number,
    totalHealth?: number,
}

interface SelfStatusProps {
    stats: SelfStats
    showRequirement?: boolean
    requirement?: number
    className?: string
    children?: React.ReactNode
    loading?: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    spaced: {
        padding: '0.3rem 1rem',
        display: 'inline-block',
    }
}))

/**
 * Display self info about the Ninja
 */
const SelfStatus = ({
    className,
    children,
    stats,
    showRequirement = false,
    requirement,
    loading = true,
}: SelfStatusProps) => {
    const classes = useStyles()
    const percent = requirement ? percentify(stats.kills, requirement) : 0
    return (
        <section className={className}>
            {stats?.health && stats?.totalHealth && <div>
                <Health char={{
                    health: stats.health,
                    totalHealth: stats.totalHealth
                }} />
            </div>}
            <div>
                My current class is{' '}
                <SText loading={loading} p={10}>
                    <NinjaClass className={classes.spaced} ninjaClass={stats.class}>
                        {stats.classDisplay as string}
                    </NinjaClass>
                </SText>
                .
            </div>
            <div>
                My current level is <SText loading={loading} p={8}><NinjaLevel className={classes.spaced} level={stats.level} />.</SText>
            </div>
            <div>
                My current kills are <SText loading={loading}>{stats.kills}.</SText>
            </div>
            {showRequirement && (
                <>
                    <div>
                        <SText loading={loading}>
                            <progress max={requirement} value={percent} />{' '}
                            {percent}%
                        </SText>
                    </div>
                    <div>
                        <SText loading={loading}>
                            <NinjaLevel level={stats.level + 1} /> level{' '}
                            {stats.level + 1} requires {requirement} kills.
                        </SText>
                    </div>
                </>
            )}
            {children}
        </section>
    )
}

export default SelfStatus
