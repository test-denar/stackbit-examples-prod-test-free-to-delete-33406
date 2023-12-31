import * as React from 'react';
import Markdown from 'markdown-to-jsx';

import type { Stats as StatsProps, StatItem as StatItemProps } from '../types/app';
import { Annotated } from '../utils/annotations';

const themeClassMap = {
    primary: 'bg-violet-800 text-white',
    dark: 'bg-gray-600 text-white'
};

export const Stats: React.FC<StatsProps> = (props) => {
    return (
        <div className={`py-24 px-12 text-center ${themeClassMap[props.theme] ?? themeClassMap['dark']}`}>
            <div className="mx-auto">
                <div className="max-w-2xl mx-auto mb-16">
                    <h2 className="mb-4 text-4xl sm:text-5xl">{props.heading}</h2>
                    <Markdown options={{ forceBlock: true }} className="sm:text-xl">
                        {props.body.internal.content}
                    </Markdown>
                </div>
                <div className="grid max-w-3xl gap-12 mx-auto sm:grid-cols-3">
                    {props.stats.length > 0 && props.stats.map((stat, idx) => <StatItem key={idx} theme={props.theme} {...stat} />)}
                </div>
            </div>
        </div>
    );
};

const itemThemeClassMap = {
    primary: 'bg-violet-700',
    dark: 'bg-gray-500'
};

const StatItem = (props: StatItemProps & { theme: StatsProps['theme'] }) => {
    return (
        <Annotated content={props}>
            <div className={`px-4 py-8 rounded-md ${itemThemeClassMap[props.theme] ?? itemThemeClassMap['dark']}`}>
                <div className="mb-3 text-3xl sm:text-4xl">{props.value}</div>
                <div className="text-sm uppercase">{props.label}</div>
            </div>
        </Annotated>
    );
};
