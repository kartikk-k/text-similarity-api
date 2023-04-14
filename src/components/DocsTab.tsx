"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/Tabs'
import Code from './ui/Code'
import { nodejsDocsCode, pythonDocsCode } from '@/helpers/docs-code'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const DocsTab = () => {
    return (
        <Tabs defaultValue='nodejs' className='w-full max-w-2xl px-5 md:px-0'>
            {/* tabs switch */}
            <TabsList>
                <TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
                <TabsTrigger value='python'>Python</TabsTrigger>
            </TabsList>

            {/* nodejs tab content */}
            <TabsContent value='nodejs'>
                <SimpleBar>
                    <Code language='javascript' animated show code={nodejsDocsCode} />
                </SimpleBar>
            </TabsContent>

            {/* python tab content */}
            <TabsContent value='python'>
                <SimpleBar>
                    <Code language='python' show animated code={pythonDocsCode} />
                </SimpleBar>
            </TabsContent>
        </Tabs >
    );
}

export default DocsTab;