module.exports = {
    lang: 'pt',
    get: (line, vars = []) => {
        switch(line){
            case 'mentionHelp': return `Use \`${vars[0]}help\` para ver todos os meus comandos!`;
            case 'blacklisted': return `Você está proibido de usar este bot!`;
            case 'noArgs': return `Você não forneceu nenhum argumento, ${vars[0]}!\nO uso correto seria:\n${vars[3].map(e => `\`${vars[1]}${vars[2]} ${e}\``).join('\n')}`;
            case 'cooldown': return `Por favor espere mais ${vars[0]} segundo(s) antes de usar o comando \`${vars[1]}\` novamente${vars[3] ? '' : `\nDica: Servidores premium tem metade do cooldown para todos os comandos\nPara adquirir premium use \`${vars[2]}premium\``}`;
            case 'error': return `Houve um erro ao tentar executar o comando \`${vars[0]}\`\nO problema foi enviado à equipe de suporte e será corrigido no futuro proximo`;
            case 'helpDescription': return 'Lista todos os comandos ou mostra informações sobre um específico';
            case 'helpUsage': return '[(comando)]';
            case 'pingDescription': return 'Ping!';
            case 'pruneDescription': return 'Deleta uma quantidade escolhida de mensagens';
            case 'pruneUsage': return '(quantidade)';
            case 'botEmbed': return 'Eu preciso de permissão para enviar links nesse canal';
            case 'botManageMessages': return 'Eu preciso de permissão para gerenciar mensagens nesse canal';
            case 'helpEmbedTitle': return 'Ajuda de comandos';
            case 'helpEmbedDescription': return `[\`Servidor de suporte\`](https://discord.gg/${vars[0]})\n[\`Me convide\`](${vars[1]})\n[\`Documentação avançada\`](https://github.com/HordLawk/YottaBot#get-started)\n[\`Top.gg\`](https://top.gg/bot/${vars[3]})\n\nUse \`${vars[2]}help (comando)\` para mais informações sobre um comando específico`;
            case 'helpEmbedFooter': return `${vars[0]} comandos | [] = Opcional - () = Variável - </> = Qualquer`;
            case 'category0': return 'Comandos';
            case 'category1': return 'Informação';
            case 'category2': return 'Administração';
            case 'category3': return 'Moderação';
            case 'category4': return 'Níveis';
            case 'category5': return 'Outros';
            case 'invalidCommand': return 'Esse não é um comando válido';
            case 'invalidStructure': return `O comando \`${vars[0]}\` não possui uma estrutura válida`;
            case 'deploySuccess': return `O comando \`${vars[0]}\` foi implantado com sucesso no \`${vars[1]}\``;
            case 'deployFail': return `O comando \`${vars[0]}\` não pode ser implantado no \`${vars[1]}\``;
            case 'helpCommandEmbedTitle': return `Ajuda para o comando ${vars[0]}`;
            case 'helpCommandEmbedFooter': return '[] = Opcional - () = Variável - </> = Qualquer';
            case 'syntax': return 'Sintaxe';
            case 'example': return 'Exemplo';
            case 'aliases': return 'Apelidos';
            case 'permissionLevel': return 'Nível de permissão';
            case 'helpCommandCooldown': return `${vars[0]} segundo(s)`;
            case 'terrible': return 'Terrível';
            case 'bad': return 'Ruim';
            case 'normal': return 'Normal';
            case 'good': return 'Bom';
            case 'average': return 'Conexão';
            case 'current': return 'Resposta';
            case 'invalidValue': return `Valor inválido. ${vars[0]}`;
            case 'maintenance': return 'Em manutenção, tente novamente mais tarde';
            case 'guildOnly': return 'Esse comando funciona apenas em servidores';
            case 'forbidden': return 'Você não tem permissão para usar esse comando';
            case 'disabled': return 'Esse comando foi desativado nesse canal';
            case 'permDescription': return 'Permite ou proibe cargos de usarem comandos específicos';
            case 'permUsage0': return '<allow/deny/default> <(menção de cargo)/(ID de cargo)/"(nome de cargo)"> (lista de comandos)';
            case 'permUsage1': return 'view <(menção de cargo)/(ID de cargo)/"(nome de cargo)">';
            case 'permission8': return 'Administrador';
            case 'permission268435456': return 'Gerenciar Cargos';
            case 'permission4': return 'Banir Membros';
            case 'permission2': return 'Expulsar Membros';
            case 'permission1099511627776': return 'Moderar Membros';
            case 'invArgs': return `Argumentos inválidos!\nO uso correto seria:\n${vars[2].map(e => `\`${vars[0]}${vars[1]} ${e}\``).join('\n')}`;
            case 'permSuccess': return `**${vars[0]}** foi ${(vars[1] === 'allow') ? 'permitido a' : 'proibido de'} usar esses comandos`;
            case 'noSpecialPerms': return 'Não há nenhuma permissão especial definida para esse cargo';
            case 'defaultPermsSuccess': return `Permissões especiais de **${vars[0]}** sobre esses comandos foram removidas`;
            case 'permsEmbedAuthor': return 'Permissões especiais';
            case 'permsAllowed': return 'Comandos permitidos';
            case 'permsDenied': return 'Comandos proibidos';
            case 'disableDescription': return 'Bloqueia comandos em canais específicos';
            case 'disableUsage0': return '(canal) <on/off> <(lista de comandos)/all>';
            case 'disableUsage1': return '(canal) view';
            case 'disableAll': return `Todos os comandos foram ${(vars[0] === 'on') ? 'bloqueados' : 'desbloqueados'} em ${vars[1]}`;
            case 'disableSome': return `Esses comandos foram ${(vars[0] === 'on') ? 'bloqueados' : 'desbloqueados'} em ${vars[1]}`;
            case 'permsEmbedDesc': return `Cargo: ${vars[0]}`;
            case 'noDisabledCmds': return 'Não há comandos bloqueados nesse canal';
            case 'disabledEmbedAuthor': return 'Comandos de canais específicos';
            case 'disabledEmbedDesc': return `Canal: ${vars[0]}`;
            case 'disabledField': return 'Bloqueado';
            case 'achieveGuild': return `Parabéns ${vars[0]}! Você conquistou o cargo **${vars[1]}**`;
            case 'achieveDM': return `Parabéns! Você conquistou o cargo **${vars[0]}** no servidor **${vars[1]}**`;
            case 'msgxpDescription': return 'Gerencia o sistema de xp desse servidor';
            case 'msgxpUsage0': return 'enable <on/off>';
            case 'msgxpUsage1': return 'roles set (cargo) (xp)';
            case 'msgxpUsage2': return 'roles remove <(cargo)/all>';
            case 'msgxpUsage3': return 'user <add/remove/set> (xp) (lista de usuários)';
            case 'msgxpUsage4': return 'ignore role <add/remove> (cargo)';
            case 'msgxpUsage5': return 'ignore channel <add/remove> (canal)';
            case 'msgxpUsage6': return 'notify <default/none/dm/(canal)>';
            case 'msgxpUsage7': return 'view';
            case 'msgxpUsage8': return 'stack <on/off>';
            case 'msgxpUsage9': return 'reset';
            case 'msgxpUsage10': return 'recommend (quantia de cargos) (xp máximo)';
            case 'xpEnable': return `Sistema de xp do servidor ${(vars[0] === 'on') ? 'ativado': 'desativado'}`
            case 'xpStack': return `Acumulo de cargos de xp ${(vars[0] === 'on') ? 'ativado': 'desativao'}`
            case 'manageRole': return 'Eu preciso de permissão para gerenciar esse cargo';
            case 'sameXp': return 'Já existe outro cargo definido para essa quantidade de xp';
            case 'maxXpRoles': return `O número maximo de cargos de xp para servidores não premium é 10, mas você pode adicionar mais com premium! Para entender como, use \`${vars[0]}premium\``;
            case 'setXpRole': return `**${vars[0]}** definido como recompensa para **${vars[1]}** xp\nesteja ciente que membros apenas receberão esse cargo ao enviar novas mensagens`;
            case 'resetXpRoles': return `Todos os cargos de xp foram removidos\nesteja ciente que esses cargos não serão removidos automaticamente dos membros, se você quiser isso, é recomendado deletar os cargos do servidor para que nenhum membro continue com eles`;
            case 'removeXpRole': return `**${vars[0]}** foi removido das recompensas de xp\nesteja ciente que esse cargo não será removido automaticamente dos membros, se você quiser isso, é recomendado deletar o cargo do servidor para que nenhum membro continue com ele`;
            case 'setUserXp': return 'Novas quantias de xp definidas';
            case 'xpIgnoreRole': return `O cargo **${vars[0]}** ${(vars[1] === 'add') ? 'não vai' : 'vai'} receber xp`;
            case 'xpIgnoreChannel': return `Usuários ${(vars[0] === 'add') ? 'não vão' : 'vão'} receber xp em ${vars[1]}`;
            case 'notifyDefault': return `Notificações de novos cargos de xp serão enviadas ${(vars[0] === 'dm') ? 'nas MDs' : 'no canal onde o cargo foi alcançado'}`;
            case 'notifyNone': return 'Nenhuma notificação de novos cargos de xp será enviada';
            case 'notifyChannel': return `Notificações de novos cargos serão enviadas em ${vars[0]}`;
            case 'notifyDefaultView': return '\`Mesmo canal\`';
            case 'notifyDMView': return '\`MDs\`';
            case 'notifyNoneView': return '\`Nenhum\`';
            case 'xpViewEmbedAuthor': return 'Configurações do sistema de xp do servidor';
            case 'xpViewEmbedDesc': return `Ativado: \`${vars[0] ? 'sim': 'não'}\`\nAcumulo: \`${vars[1] ? 'não': 'sim'}\`\nNotificações: ${vars[2]}`;
            case 'xpViewRoles': return 'Cargos conquistáveis';
            case 'xpViewIgnoredRoles': return 'Cargos ignorados';
            case 'xpViewIgnoredChannels': return 'Canais ignorados';
            case 'resetXpConfirm': return 'Isso **__REDEFINIRÁ O XP DE TODOS OS USUÁRIOS__** para 0, você tem certeza que deseja prosseguir?';
            case 'timedOut': return 'Limite de tempo da operação atingido';
            case 'cancelled': return 'Operação cancelada';
            case 'resetXp': return 'O xp do servidor foi redefinido com sucesso';
            case 'memberManageRole': return 'Você não tem permissão para gerenciar esse cargo';
            case 'sendMessages': return 'Eu preciso de permissão para enviar mensagens nesse canal';
            case 'rolemenuDescription': return 'Cria uma mensagem onde usuários podem reagir para reivindicar um ou mais cargos';
            case 'rolemenuUsage0': return 'create (canal) <(menção de cargo)/(ID de cargo)/"(nome de cargo)"> (emoji) [(lista de cargos e emojis)] [toggle]';
            case 'rolemenuUsage1': return 'edit (ID de menu) <(menção de cargo)/(ID de cargo)/"(nome de cargo)"> (emoji) [(lista de cargos e emojis)] [toggle]';
            case 'maxRolesMenu': return 'O número máximo de cargos por menu é 20';
            case 'botReactions': return 'Eu preciso de permissão para adicionar reações nesse canal';
            case 'maxRolemenus': return `O número máximo de menus para servidores não premium é 10, mas você pode adicionar mais com premium! Para entender como, use \`${vars[0]}premium\``;
            case 'uniqueEmoji': return 'Cada emoji só pode ser usado uma vez por menu';
            case 'loading': return 'Carregando...';
            case 'rolemenuEmbedAuthor': return 'Reaja para reivindicar um cargo';
            case 'rolemenuCreated': return 'Rolemenu criada com sucesso';
            case 'menu404': return 'Menu não encotrado';
            case 'rolemenuEdited': return 'Rolemenu editado com sucesso';
            case 'configsDescription': return 'Configurações gerais do servidor';
            case 'configsUsage0': return 'prefix (novo prefixo)';
            case 'configsUsage1': return 'language <en/pt>';
            case 'configsUsage2': return 'view';
            case 'configsUsage3': return 'mod logs (canal) <warn/mute/kick/ban> [(outros tipos de casos)]';
            case 'configsUsage4': return 'mod clearonban (dias)';
            case 'longPrefix': return 'O prefixo não pode conter mais de 10 caracteres';
            case 'newPrefix': return 'Prefixo do servidor atualizado';
            case 'lang404': return 'Idioma não suportado';
            case 'newLang': return 'Idioma do servidor atualizado';
            case 'configsEmbedAuthor': return 'Configurações do servidor';
            case 'configsEmbedDesc': return `Prefixo: \`${vars[0]}\`\nIdioma: \`${vars[1]}\`\nRegistrar anexos: \`${vars[2] ? 'ativado' : 'desativado'}\`\nCanal de registro de warn: ${vars[3].warn ? `<#${vars[3].warn}>` : '`nenhum`'}\nCanal de registro de mute: ${vars[3].mute ? `<#${vars[3].mute}>` : '`nenhum`'}\nCanal de registro de kick: ${vars[3].kick ? `<#${vars[3].kick}>` : '`nenhum`'}\nCanal de registro de ban: ${vars[3].ban ? `<#${vars[3].ban}>` : '`nenhum`'}\nNúmero de dias de mensagens deletadas em bans: \`${vars[4]}\`\nFunções beta: \`${vars[5] ? 'ativadas' : 'desativadas'}\``;
            case 'betaCommand': return 'Esse comando atualmente está disponível apenas para servidor que ativaram funcionalidade beta nas configurações do bot';
            case 'premiumCommand': return `Esse comando é uma funcionalidade premium, use \`${vars[0]}premium\` para mais informações sobre se tornar premium`;
            case 'botWebhooks': return 'Eu preciso de permissão para gerenciar webhooks nesse canal';
            case 'executor': return `\nExecutor: ${vars[0]}`;
            case 'delmsgEmbedAuthor': return 'Mensagem deletada';
            case 'delmsgEmbedAuthorTitle': return 'Autor';
            case 'delmsgEmbedChannelTitle': return 'Canal';
            case 'delmsgEmbedExecutorTitle': return 'Executor';
            case 'delmsgEmbedSentTitle': return 'Enviada';
            case 'delmsgEmbedSentValue': return `<t:${vars[0]}>`;
            case 'delmsgEmbedAttachmentsTitle': return 'Anexos';
            case 'delmsgEmbedAttachmentsMedia': return `[\`Anexo-${vars[0]}-Mídia\`](${vars[1]})`;
            case 'delmsgEmbedAttachmentsFile': return `[\`Anexo-${vars[0]}-Arquivo\`](${vars[1]})`;
            case 'actionlogsDescription': return 'Gerencia registros de ações no servidor';
            case 'actionlogsUsage0': return 'defaultchannel (canal)';
            case 'actionlogsUsage1': return 'set <delmsg/prune> <(canal)/default>';
            case 'actionlogsUsage2': return 'ignore channel <add/remove> (canal) <delmsg/prune/all>';
            case 'actionlogsUsage3': return 'ignore channel view (canal)';
            case 'actionlogsUsage4': return 'ignore role <add/remove> (cargo) <delmsg/prune/all/view>';
            case 'actionlogsUsage5': return 'ignore role view (cargo)';
            case 'newDefaultHookReason': return 'Webhook do canal de registros padrão';
            case 'oldDefaultHookReason': return 'Webhook do canal antigo de registros padrão';
            case 'newDefaultLog': return `Canal de registros padrão definido para ${vars[0]}`;
            case 'noDefaultLog': return 'Canal de registros padrão não definido';
            case 'oldHookReason': return `Webhook do canal antigo de registros de ${vars[0]}`;
            case 'newDefaultLogSuccess': return 'Essa ação foi definida para ser registrada no canal de registros padrão';
            case 'newHookReason': return `Webhook do canal de registros de ${vars[0]}`;
            case 'newLogSuccess': return `Essa ação foi definida para ser registrada em ${vars[0]}`;
            case 'removeLogSuccess': return 'Essa ação não será registrada';
            case 'noIgnoredActionsChannel': return 'Nenhum ação está sendo ignorada nesse canal'
            case 'ignoredActionsChannelEmbedAuthor': return 'Canal ignorado';
            case 'ignoredActionsChannelEmbedDesc': return `Canal: ${vars[0]}`;
            case 'ignoredActionsEmbedFooter': return `${vars[0]} ações ignoradas`;
            case 'ignoredActionsEmbedActionsTitle': return 'Ações';
            case 'actiondelmsg': return '**mensagens deletadas**';
            case 'actionprune': return '**mensagens limpas**';
            case 'noIgnoredActionsRole': return 'Nenhuma ação está sendo ignorada para esse cargo';
            case 'ignoredActionsRoleEmbedAuthor': return 'Cargo ignorado';
            case 'ignoredActionsRoleEmbedDesc': return `Cargo: ${vars[0]}`;
            case 'allActionsIgnoredChannelSuccess': return `Todas as ações serão ignoradas em ${vars[0]}`;
            case 'noActionsIgnoredChannelSuccess': return `Nenhuma ação será ignorada em ${vars[0]}`;
            case 'allActionsIgnoredRoleSuccess': return `Todas as ações serão ignorada para **${vars[0]}**`;
            case 'noActionsIgnoredRoleSuccess': return `Nenhuma ação será ignorada para **${vars[0]}**`;
            case 'actionIgnoredChannelSuccess': return `**${vars[0]}** será ignorada em ${vars[1]}`;
            case 'actionNotIgnoredChannelSuccess': return `**${vars[0]}** não será ignorada em ${vars[1]}`;
            case 'actionIgnoredRoleSuccess': return `**${vars[0]}** será ignorada para **${vars[1]}**`;
            case 'actionNotIgnoredRoleSuccess': return `**${vars[0]}** não será ignorada para **${vars[1]}**`;
            case 'logsViewEmbedAuthor': return 'Informações sobre registro de ações';
            case 'logsViewEmbedDesc': return `Canal padrão: ${vars[0] ? `<#${vars[0]}>` : '\`nenhum\`'}`;
            case 'logsViewEmbedActionsTitle': return 'Ações registradas';
            case 'logsViewEmbedActions': return `**${vars[0]}** - ${vars[1] ? `<#${vars[1]}>` : '`Padrão`'}`
            case 'logsViewEmbedIgnoredChannelsTitle': return 'Canais ignorados';
            case 'logsViewEmbedIgnoredRolesTitle': return 'Cargos ignorados';
            case 'logsViewEmbedIgnoredSome': return 'Alguns';
            case 'logsViewEmbedIgnoredAll': return 'Todos';
            case 'logattachmentsBadArgs': return 'Essa configuração deve ser definida como `on` ou `off`';
            case 'logattachmentsNoHook': return 'Escolha um canal para registrar mensagens deletadas primeiro';
            case 'logattachmentsNoNSFW': return 'Para usar essa configuração o canal de registros de mensagens deletadas precisa estar definido como NSFW';
            case 'logattachmentsOnSuccess': return 'Anexos serão registrados';
            case 'logattachmentsOffSuccess': return 'Anexos não serão registrados';
            case 'premiumDescription': return 'Informações sobre se tornar premium';
            case 'alreadyPremium': return 'Esse servidor já tem acesso a funções premium';
            case 'premiumEmbedDesc': return `Ainda não é possível comprar o modo premium, se você deseja solicitar parceria ou pagar pelo premium diretamente **[entre no servidor de suporte](https://discord.gg/${vars[0]})** e contate os desenvolvedores`;
            case 'banDescription': return 'Bane um usuário';
            case 'banUsage': return '(usuário) [(motivo)]';
            case 'invUser': return 'Usuário inválido';
            case 'cantBan': return 'Eu não consigo banir esse membro';
            case 'youCantBan': return 'Você não pode banir esse membro';
            case 'dmBanned': return `Você foi banido em **${vars[0]}**${vars[1] ? `\n__Motivo:__ *${vars[1]}*` : ''}`;
            case 'alreadyBanned': return 'Esse usuário já está banido';
            case 'banReason': return `Executor: ${vars[0]}${vars[1] ? ` | Motivo: ${vars[1]}` : ''}`;
            case 'memberBanSuccess': return `Membro banido\nID do caso: \`${vars[0]}\``;
            case 'banEmbedAuthor': return `${vars[0]} baniu ${vars[1]}`;
            case 'banEmbedDescription': return `[\`Mensagem da ação\`](${vars[0]})`;
            case 'banEmbedTargetTitle': return 'Alvo';
            case 'banEmbedTargetValue': return `${vars[0]}\n${vars[0].id}`;
            case 'banEmbedExecutorTitle': return 'Executor';
            case 'banEmbedFooter': return `Caso ${vars[0]}`;
            case 'banEmbedReasonTitle': return 'Motivo';
            case 'checkDescription': return 'Mostra os casos de um usuário';
            case 'checkUsage': return '(usuário) <all/warn/mute/kick/ban> [(filtro de tempo)]';
            case 'invLogs': return 'Nenhum registro atendendo a essas condições foi encontrado';
            case 'checkEmbedAuthor': return 'Casos';
            case 'checkEmbedFooter': return `${vars[0]} casos encontrados`;
            case 'checkEmbedCaseTitle': return `Caso ${vars[0]}`;
            case 'checkEmbedCaseValue': return `${vars[0].actionMessage ? `[\`Mensagem da ação\`](${vars[0].actionMessage})\n` : ''}Tipo: \`${vars[0].removal ? `${'un'}${vars[0].type}` : vars[0].type}\`\n${vars[0].executor ? `Executor: <@${vars[0].executor}>\n` : ''}${vars[1] ? `Duração: \`${vars[1][0] ? `${vars[1][0]}d` : ''}${vars[1][1] ? `${vars[1][1]}h` : ''}${vars[1][2] ? `${vars[1][2]}m` : ''}\`\n` : ''}${vars[0].reason ? `Motivo: *${vars[0].reason.slice(0, 250)}*\n` : ''}Data: <t:${Math.floor(vars[0].timeStamp.getTime() / 1000)}>${vars[0].image ? `\n[\`Mídia\`](${vars[0].image})` : ''}`;
            case 'modLogsSetSuccess': return `Canal de registro de ${vars[0].map(e => `\`${e}\``).join(' ')} definido como ${vars[1]}`;
            case 'invClearOnBanDays': return 'O número de dias precisa ser entre 0 e 7';
            case 'clearOnBanDaysSetSuccess': return `Número de dias de mensagens para deletar em bans definido como **${vars[0]}**`;
            case 'invRole': return 'Cargo não encontrado';
            case 'muteRoleSetSuccess': return `Cargo de mute definido como **${vars[0]}**`;
            case 'autoSetupMuteSetSuccess': return `Modo de configuração automática de mute foi **${(vars[0] === 'on') ? '' : 'des'}ativado**`;
            case 'inviteDescription': return 'Envia um link para adicionar o bot ao seu servidor';
            case 'inviteEmbedDescription': return `**[Me convide](${vars[0]})** para o seu servidor!`;
            case 'muteDescription': return 'Muta um membro';
            case 'muteUsage': return '(membro) (duração) [(motivo)]';
            case 'invMember': return 'Membro não encontrado';
            case 'youCantMute': return 'Você não pode mutar esse membro';
            case 'iCantMute': return 'Eu não tenho permissão para moderar esse membro';
            case 'invMuteDuration': return 'Duração de mute inválida';
            case 'alreadyMuted': return 'Esse usuário já está mutado';
            case 'botManageRolesServer': return 'Eu não consigo gerenciar cargos nesse servidor';
            case 'botModerateMembersServer': return 'Eu não consigo moderar membros nesse servidor';
            case 'cantGiveMuteRole': return 'Eu não consigo dar o cargo de mute aos membros';
            case 'noMuteRole': return 'Nenhum cargo de mute foi definido e o modo de configuração automática de mute está desativado';
            case 'muteRoleName': return 'Mutado';
            case 'muteMemberSuccess': return `Membro mutado\nID do caso: \`${vars[0]}\``;
            case 'muteRoleSetupReason': return 'Configuração das permissões do cargo de mute';
            case 'muteEmbedAuthor': return `${vars[0]} mutou ${vars[1]}`;
            case 'muteEmbedDescription': return `[\`Mensagem da ação\`](${vars[0]})`;
            case 'muteEmbedTargetTitle': return 'Alvo';
            case 'muteEmbedTargetValue': return `${vars[0]}\n${vars[0].id}`;
            case 'muteEmbedExecutorTitle': return 'Executor';
            case 'muteEmbedDurationTitle': return 'Duração';
            case 'muteEmbedDurationValue': return `${vars[0] ? `${vars[0]}d` : ''}${vars[1] ? `${vars[1]}h` : ''}${vars[2] ? `${vars[2]}m` : ''}\n<t:${vars[3]}:R>`;
            case 'muteEmbedFooter': return `Caso ${vars[0]}`;
            case 'muteEmbedReasonTitle': return 'Motivo';
            case 'activatePremium': return `Você tem **${vars[0]}** chaves premium restantes\nVocê quer ativar funções premium nesse servidor? Essa ação não pode ser revertida`;
            case 'confirm': return 'Confirmar';
            case 'cancel': return 'Cancelar';
            case 'previous': return 'Anterior';
            case 'next': return 'Próxima';
            case 'activatePremiumSuccess': return 'Funções premium ativadas';
            case 'reasonDescription': return 'Edita o motivo de um caso de moderação';
            case 'reasonUsage': return '(ID do caso) (novo motivo)';
            case 'invCase': return 'Caso não encontrado';
            case 'youCantEditCase': return 'Você não pode editar esse caso';
            case 'reasonEditSuccess': return 'Motivo editado';
            case 'reasonEmbedTargetTitle': return 'Alvo';
            case 'reasonEmbedTargetValue': return `<@${vars[0]}>\n${vars[0]}`;
            case 'reasonEmbedExecutorTitle': return 'Executor';
            case 'reasonEmbedExecutorValue': return `<@${vars[0]}>`;
            case 'reasonEmbedDurationTitle': return 'Duração';
            case 'reasonEmbedDurationValue': return `${vars[0] ? `${vars[0]}d` : ''}${vars[1] ? `${vars[1]}h` : ''}${vars[2] ? `${vars[2]}m` : ''}\n<t:${vars[3]}:R>`;
            case 'reasonEmbedReasonTitle': return 'Motivo';
            case 'supportDescription': return 'Envia um convite para o servidor de suporte';
            case 'supportEmbedDescription': return `**[Entre](https://discord.gg/${vars[0]})** em meu servidor de suporte!`;
            case 'unbanDescription': return 'Desbane um usuário';
            case 'unbanUsage': return '(usuário) [(motivo)]';
            case 'invBanned': return 'Usuário banido não encontrado';
            case 'cantUnban': return 'Eu não tenho permissão para desbanir membros';
            case 'unbanAuditReason': return `Executor: ${vars[0]}${vars[1] ? ` | Motivo: ${vars[1]}` : ''}`;
            case 'unbanSuccess': return `Usuário desbanido\nID do caso: \`${vars[0]}\``;
            case 'unbanEmbedAuthor': return `${vars[0]} desbaniu ${vars[1]}`;
            case 'unbanEmbedDescription': return `[\`Mensagem da ação\`](${vars[0]})`;
            case 'unbanEmbedTargetTitle': return 'Alvo';
            case 'unbanEmbedTargetValue': return `${vars[0]}\n${vars[0].id}`;
            case 'unbanEmbedExecutorTitle': return 'Executor';
            case 'unbanEmbedFooter': return `Caso ${vars[0]}`;
            case 'unbanEmbedReasonTitle': return 'Motivo';
            case 'unmuteDescription': return 'Desmuta um usuário';
            case 'unmuteUsage': return '(usuário) [(motivo)]';
            case 'youCantUnmute': return 'Você não pode desmutar esse membro';
            case 'invMuteRole': return 'Cargo de mute não encontrado';
            case 'cantManageMuteRole': return 'Eu não posso gerenciar o cargo de mute';
            case 'invMuted': return 'Membro mutado não encontrado';
            case 'unmuteSuccess': return `Membro desmutado\nID do caso: \`${vars[0]}\``;
            case 'unmuteEmbedAuthor': return `${vars[0]} desmutou ${vars[1] || 'alguém'}`;
            case 'unmuteEmbedDescription': return `[\`Mensagem da ação\`](${vars[0]})`;
            case 'unmuteEmbedTargetTitle': return 'Alvo';
            case 'unmuteEmbedTargetValue': return `<@${vars[0]}>\n${vars[0]}`;
            case 'unmuteEmbedExecutorTitle': return 'Executor';
            case 'unmuteEmbedFooter': return `Caso ${vars[0]}`;
            case 'unmuteEmbedReasonTitle': return 'Motivo';
            case 'warnDescription': return 'Avisa um membro';
            case 'warnUsage': return '(usuário) [(motivo)]';
            case 'cantWarnBot': return 'Eu não posso avisar um bot';
            case 'youCantWarn': return 'Você não tem permissão para avisar esse membro';
            case 'dmWarned': return `Você foi avisado em **${vars[0]}**${vars[1] ? `\n__Motivo:__ *${vars[1]}*` : ''}`;
            case 'warnedBlockedDms': return 'O aviso não pode ser enviado nas MDs do usuário. Isso normalmente acontece quando um usuário desativa MDs para esse servidor';
            case 'warnSuccess': return `Membro avisado\nID do caso: \`${vars[0]}\``;
            case 'warnEmbedAuthor': return `${vars[0]} avisou ${vars[1]}`;
            case 'warnEmbedDescription': return `[\`Mensagem da ação\`](${vars[0]})`;
            case 'warnEmbedTargetTitle': return 'Alvo';
            case 'warnEmbedTargetValue': return `${vars[0]}\n${vars[0].id}`;
            case 'warnEmbedExecutorTitle': return 'Executor';
            case 'warnEmbedFooter': return `Caso ${vars[0]}`;
            case 'warnEmbedReasonTitle': return 'Motivo';
            case 'xpDescription': return 'Mostra o xp de um membro em um servidor';
            case 'xpUsage0': return '[(usuário)]';
            case 'xpUsage1': return 'rank';
            case 'xpUsage2': return 'roles';
            case 'xpDisabled': return 'O sistema de xp está desativado nesse servidor';
            case 'lbDeprecated': return 'O argumento `lb` foi descontinuado e será removido em uma atualização futura, em vez disso, por favor use `rank`';
            case 'xpRankEmbedAuthor': return 'Ranking de xp';
            case 'xpRankEmbedFooter': return `Você está posicionado em #${vars[0]}`;
            case 'noXpRoles': return 'Não há nenhum cargo de xp nesse servidor';
            case 'xpRolesEmbedAuthor': return 'Cargos de xp';
            case 'noXp': return 'Esse membro ainda não tem nenhum xp';
            case 'xpEmbedAuthor': return 'Xp';
            case 'xpEmbedDescription': return `${vars[0] ? `Nível atual: <@&${vars[0].roleID}>\n` : ''}${vars[1] ? `Proximo nível: <@&${vars[1].roleID}>\n` : ''}Progresso: **${vars[2]}${vars[1] ? `/${vars[1].xp}` : ''}**`;
            case 'xpEmbedFooter': return `#${vars[0]}`;
            case 'dmBotAdder': return `Saudações ${vars[0]}! Obrigado por me adicionar a **${vars[1]}**. Como eu sou um bot muito customizavel recomendo que comece dando uma olhada em \`${vars[2]}help configs\` e configurando as permissões dos comandos com \`${vars[2]}help perm\`, senão alguns deles podem ter permissões padrão muito restritivas, como o comando \`mute\`, que por padrão só é permitido para usuários com a permissão Gerenciar Cargos\n\nSe precisar de ajuda, não hesite em **[entrar no servidor de suporte](https://discord.gg/${vars[3]})**, você também pode ler a **[documentação completa](https://github.com/HordLawk/YottaBot#get-started)** para informações mais detalhadas`;
            case 'autoUnmuteEmbedAuthorMember': return `${vars[0]} foi desmutado`;
            case 'autoUnmuteEmbedAuthorNoMember': return 'Unmute';
            case 'autoUnmuteEmbedTargetTitle': return 'Alvo';
            case 'autoUnmuteEmbedTargetValue': return `<@${vars[0]}>\n${vars[0]}`;
            case 'autoUnmuteEmbedReasonTitle': return 'Motivo';
            case 'autoUnmuteEmbedReasonValue': return 'Fim do mute';
            case 'autoUnmuteEmbedDescription': return `[\`Mute referido\`](${vars[0]})`;
            case 'kickDescription': return 'Expulsa um membro de um servidor';
            case 'kickUsage': return '(usuário) [(motivo)]';
            case 'cantKick': return 'Eu não consigo expulsar esse membro';
            case 'youCantKick': return 'Você não pode expulsar esse membro';
            case 'kickAuditReason': return `Executor: ${vars[0]}${vars[1] ? ` | Motivo: ${vars[1]}` : ''}`;
            case 'kickSuccess': return `Membro expulso\nID do caso: \`${vars[0]}\``;
            case 'kickEmbedAuthor': return `${vars[0]} expulsou ${vars[1]}`;
            case 'kickEmbedDescription': return `[\`Mensagem da ação\`](${vars[0]})`;
            case 'kickEmbedTargetTitle': return 'Alvo';
            case 'kickEmbedTargetValue': return `${vars[0]}\n${vars[1]}`;
            case 'kickEmbedExecutorTitle': return 'Executor';
            case 'kickEmbedFooter': return `Caso ${vars[0]}`;
            case 'kickEmbedReasonTitle': return 'Motivo';
            case 'massbanDescription': return 'Bane varios usuários ao mesmo tempo';
            case 'massbanUsage': return '(usuário) [(lista de usuários)] [(motivo)]';
            case 'massbanSuccess': return `${vars[0] ? `${vars[0]} usuários banidos\n` : ''}${vars[1] ? `${vars[1]} usuários inválidos\n` : ''}${vars[2] ? `${vars[2]} usuários não puderam ser banidos\n` : ''}${vars[3] ? `${vars[3]} usuários já estavam banidos` : ''}`;
            case 'firstBoost': return `Parabéns ${vars[0]}, você impulsionou **${vars[1]}** e foi recompensado com uma chave premium, use o comando \`premium\` em qualquer servidor para ativar as funções premium`;
            case 'renewBoost': return `Obrigado por impulsionar **${vars[0]}** por mais um mês! Você recebeu uma chave premium como recompensa, use o comando \`premium\` em qualquer servidor para ativar as funções premium`;
            case 'recommendMinLevels': return 'Você não pode pedir por recomendações para menos de 2 níveis';
            case 'recommendMinXp': return 'O xp do nível máximo deve ser no mínimo 13';
            case 'recommendXpNotEnough': return `**${vars[0]}** não é xp suficiente para **${vars[1]}** níveis`;
            case 'recommendSuccess': return `As quantias de xp recomendadas são ${vars[0].map(e => `\`${Math.round(e / 20)}\``).join(' ')}`;
            case 'infoEmbedAuthor': return 'Informações sobre YottaBot';
            case 'infoEmbedDescription': return `[\`Me convide\`](${vars[0]})`;
            case 'infoEmbedVersionTitle': return 'Versão';
            case 'infoEmbedEngineTitle': return 'Engine';
            case 'infoEmbedEngineValue': return `Node.js ${vars[0]}`;
            case 'infoEmbedLibraryTitle': return 'Biblioteca';
            case 'infoEmbedLibraryValue': return `discord.js v${vars[0]}`;
            case 'infoEmbedDeveloperTitle': return 'Desenvolvedor';
            case 'infoEmbedUptimeTitle': return 'Último login';
            case 'infoEmbedUptimeValue': return `<t:${Math.floor(vars[0] / 1000)}:R>`;
            case 'infoEmbedRAMTitle': return 'Uso de RAM';
            case 'infoEmbedRAMValue': return `${(vars[0] / 1048576).toFixed(2)} MB`;
            case 'infoEmbedSupportTitle': return 'Servidor de suporte';
            case 'infoEmbedSupportValue': return `[\`discord.gg/${vars[0]}\`](https://discord.gg/${vars[0]})`;
            case 'infoEmbedRepoTitle': return 'Código fonte';
            case 'infoEmbedRepoValue': return '[\`github.com/HordLawk/YottaBot\`](https://github.com/HordLawk/YottaBot)';
            case 'upvoteDescription': return 'Vote em mim no Top.gg';
            case 'upvoteEmbedDescription': return `**[Vote em mim](https://top.gg/bot/${vars[0]}/vote)** no Top.gg!`;
            case 'voiceXpEmbedAuthor': return 'Configurações do sistema de xp por voz';
            case 'voiceXpEmbedDesc': return `Ativado: ${vars[0] ? `\`sim\`\nCooldown: \`${vars[0]} minutos\``: '`não`'}`;
            case 'voiceXpIgnoredChannels': return 'Canais de voz ignorados';
            case 'betaSuccess': return `Funções beta foram **${(vars[0] === 'on') ? '' : 'des'}ativadas**`;
            case 'voicexpDescription': return 'Gerencia o ganho de xp em canais de voz';
            case 'voicexpUsage0': return 'enable (cooldown em minutos)';
            case 'voicexpUsage1': return 'ignore <add/remove> (canal)';
            case 'invCooldown': return 'O cooldown em minutos deve ser um inteiro entre 1 e 59';
            case 'voicexpEnableSuccess': return `O ganho de xp em canais de voz foi ativado e seu cooldown definido como ${vars[0]}`;
            case 'voicexpDisableSuccess': return 'O ganho de xp em canais de voz foi desativado';
            case 'slashOnly': return `O comando \`${args[0]}\` pode ser executado apenas por meio da função nativa de comandos de barra de Discord\nDigite \`/${args[0]}\` para usa-lo`;
        }
    },
};