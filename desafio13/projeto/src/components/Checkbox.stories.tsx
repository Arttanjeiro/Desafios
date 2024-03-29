import { Meta , StoryObj} from '@storybook/react'
import {Checkbox, checkboxProps} from  './Checkbox'
import { Text } from './Text'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args:{
    },
    argTypes: {
    },
    decorators:[
        (Story) => {
            return(
                <div className='flex items-center gap-2' >
                    {Story()}
                    <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
                </div>
            )
        }
    ],
} as Meta <checkboxProps>

export const Default: StoryObj<checkboxProps> = {}
