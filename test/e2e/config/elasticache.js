export default {
  path: '/elasticache/',
  useCases: [
    {
      name: 'ElastiCacheの計算結果が想定内',
      range: {
        min: 100,
        max: 130
      },
      waitFor: 'td[data-name="instance"]',
      actions: [
        {
          type: 'select',
          target: 'td[data-name="instance"] select',
          value: 'cache.t2.small'
        },
        {
          type: 'type',
          target: 'td[data-name="unit"] input',
          value: '3'
        }
      ],
      price: {
        target: '.service-calc span[data-name="price"]'
      }
    }
  ]
}
