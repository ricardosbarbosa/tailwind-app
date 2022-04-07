module.exports = {
  client: {
    includes: [
      './features/**/*.{ts,tsx}',
      './lib/**/*.{ts,tsx}',
      './pages/**/*.{ts,tsx}',
      './shared/**/*.{ts,tsx}',
    ],
    service: {
      name: 'My-Graph-npxnk',
      url: 'https://dev2.api.playoneup.com/', 
      // localSchemaFile: './schema.graphql', 
    },
  },
}
