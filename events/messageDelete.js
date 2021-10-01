module.exports = {
    name: 'messageDelete',
    once: false,
    execute(message, client){
      if(message.author.bot) return;
        client.snipes.set(message.channel.id, {
            content: message.content,
            author: message.author.tag,
            member: message.member,
            deletedAt: new Date(),
            attachments: message.attachments.size > 0 ? message.attachments.first().url : null
        })
    }
}