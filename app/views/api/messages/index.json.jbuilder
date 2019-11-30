json.array! @messages do |message|
  json.content message.content
  json.image message.image.url
  json.updated_at message.updated_at.strftime("%Y/%m/%d %H:%M")
  json.name message.user.name
  json.id message.id
end