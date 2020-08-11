import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const tokens: RuleDefinition = {
  rule: async (context) => {
    context.utils.report('Hello world')
  },
  name: 'sketch-assistant-colors/tokens',
  title: 'Colors Tokens',
  description: 'Reports a tokens message',
}

const assistant: AssistantPackage = async () => {
  return {
    name: 'sketch-assistant-colors',
    rules: [tokens],
    config: {
      rules: {
        'sketch-assistant-colors/tokens': { active: true },
      },
    },
  }
}

export default assistant
