 
 # 后端 MVC
  v => view 视图
  C => controller 控制器  后端逻辑部分  视图与数据模型搭桥
    => 面向客户端的接口
  M => model 数据模型    操作数据库 => 数据表增删改查

 
 #Vuex
  component => store => commit => mutation methods => state
   component => store.dispatch => action => ctx.commit =>mutations method => state

   #redux
   component => store.dispatch => action =>ctx.commit => reducer method =>state


   事件一般不响应纯函数(工具函数) 
   mutations method 一般为纯函数，一般通过action触发，调用
   事件响应一个函数的执行一般都有副作用

   害怕在组件的事件触发了以后，去调用mutation redux ，在此写副作用，所以不建议你直接操作mutation


   actionTypes