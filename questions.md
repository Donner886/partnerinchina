1. package.json 中如果添加  "type": "module", 的时候， npm prisma db seed 将会失败。 
   - 目前的处理方法是：在执行上述命令的时候暂时取消 type配置
   - 但是如果取消type配置， 系统将无法启动， 所以有需要加回配置。  