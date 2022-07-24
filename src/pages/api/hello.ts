// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const hello = (req: any, res: any): void => {
  res.status(200).json([
    { name: 'John Doe' },
    { name: 'John Wick' },
    { name: 'John Mackleine' },
  ])
}

export default hello;