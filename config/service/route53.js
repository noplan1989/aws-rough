export default {
  key: 'route53',
  name: 'Route53',
  description: 'DNS',
  color: 'orange',
  multiple: false,
  table: [
    {
      type: 'number',
      key: 'hostzone',
      title: 'ホストゾーン数'
    },
    {
      type: 'number',
      key: 'query',
      title: 'クエリ数'
    }
  ]
}