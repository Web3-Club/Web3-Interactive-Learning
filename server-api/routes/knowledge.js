const dialogs = [
  
  { 
      "id":1,
      "title":"Web3介绍",
      "dialog":[
      
          {
              "id":1,
              "type":"knowledge",
              "data":"Hi 非常欢迎您来开始进入Web3🌐的世界 🚀"
            "path":[
                  {
                      "from":1,
                      "to":2
                  }
              ]
          },          
       
          {
              "id":2,
              "type":"knowledge",
              "data":"我们可以将过去短暂的互联网历史分为两个时期—Web 1.0 和 Web 2.0 🔗 "
            "path":[
                  {
                      "from":2,
                      "to":3
                  }
              ]
          },
       
          {
              "id":3,
              "type":"knowledge",
              "data":"比如 Web1.0时期(1990-2004)，这个时期的互联网的特点：只读。👀"
            "path":[
                  {
                      "from":3,
                      "to":4
                  }
              ]
          },
       
          {
              "id":4,
              "type":"choices",
              "data":[
                  {
                      "choice":"🕸️ 没用过Web1.0，不是很了解......", 
                      "path":[
                          {
                              "from":none,
                              "to":5
                          }
                      ]
                  },
                    
                  {
                      "choice":"我有听说过！🧐",
                      "path":[
                          {
                              "from":none,
                              "to":5
                          }
                      ]
                  },        
              ]
          },
        
          {
              "id":5,
              "type":"knowledge",
              "data":"Web1.0主要是由公司拥有的静态网站，用户之间的互动几乎为零 ❌",
              "path":[
                  {
                      "from":5,
                      "to":6
                  }
              ]
          },
        
         
        
          {
              "id":6,
              "type":"knowledge",
              "data":"个人很少创造内容，导致它被称为只读网络。🚫🗣️",
              "path":[
                  {
                      "from":6,
                      "to":7
                  }
              ]
          },
         
          {
              "id":7,
              "type":"choices",
              "data":[
                  {
                      "choice":"😢 还蛮遗憾的。",  
                      "path":[
                          {
                              "from":none,
                              "to":8
                          }
                      ]
                  },
           
                  {
                      "choice":"💻 那Web2.0又是什么呢？",
                      "path":[
                          {
                              "from":none,
                              "to":8
                          }
                      ]
                  },
                                            
          {
              "id":8,
              "type":"knowledge",
              "data":"是的，接着迎来了Web2.0时代。🎉",
              "path":[
                  {
                      "from":8,
                      "to":9
                  }
              ]
          },
          
          {
              "id":9,
              "type":"knowledge",
              "data":"Web2.0（2004 年 - 至今），特点：能读能写。",
              "path":[
                  {
                      "from":9,
                      "to":10
                  }
              ]
          },
          
          {
              "id":10,
              "type":"knowledge",
              "data":"网络不再是只读的，它演变成读写网络。 ",
              "path":[
                  {
                      "from":10,
                      "to":11
                  }
              ]
          },
            
          {
              "id":11,
              "type":"knowledge",
              "data":"互联网公司除了向用户提供内容外，还开始提供平台来共享用户生产的内容，并参与用户间的交互。👀💬💻",
              "path":[
                  {
                      "from":11,
                      "to":12
                  }
              ] 
          },
                
          {
              "id":12,
              "type":"image",
              "data":"https://ethereum.org/static/9f50d47733edad715c3068c4c6a8bc6d/00d43/web2.png",
              "path":[
                  {
                      "from":12,
                      "to":13
                  }
              ] 
          },
         
          
          {
              "id":13,
              "type":"choices",
              "data":[
                  {
                      "choice":"🌐 有什么应用是Web2.0的呢？", 
                      "path":[
                          {
                              "from":none,
                              "to":14
                          }
                      ]
                  },
           
          {
              
                  {
                      "choice":"🤩 和我理解的一样！", 
                      "path":[
                          {
                              "from":none,
                              "to":17
                          }
                      ]
                  },
          {
              "id":14,
              "type":"knowledge",
              "data":"📱社交网络：如WeChat、QQ等。",
              "path":[
                  {
                      "from":14,
                      "to":15
                  }
              ] 
          },
                
          {
              "id":15,
              "type":"knowledge",
              "data":"📹视频分享：如B站、抖音等。",
              "path":[
                  {
                      "from":15,
                      "to":16
                  }
              ] 
          },  
                 
          {
              "id":16,
              "type":"choices",
              "data":[
                  {
                      "choice":"💡 这些我都在用的！", 
                      "path":[
                          {
                              "from":none,
                              "to":17
                          }
                      ]
                  },
                
                  {
                      "choice":"🚀 后来呢？", 
                      "path":[
                          {
                              "from":none,
                              "to":17
                          }
                      ]
                  },
            
            
           {
              "id":17,
              "type":"knowledge",
              "data":"到了Web 3.0，用户对于个人数据有了更多的控制权和选择权🔐🔀。",
              "path":[
                  {
                      "from":17,
                      "to":20
                  }
              ] 
           },
           {
              "id":18,
              "type":"image",
              "data":"https://ethereum.org/static/54eef2049c233f9868af91546a07b2c7/00d43/web3.png",
              "path":[
                  {
                      "from":18,
                      "to":20
                  }
              ] 
          },  
                
          {
              "id"19:,
              "type":"knowledge",
              "data":"Web 3.0：能读🔍 - 能写💬 - 能拥有🤝。它的核心思想有以下：",
              "path":[
                  {
                      "from":19,
                      "to":20
                  }
              ] 
          },  
                
                
         
                 
         
          
                
                
                
                
                
           
          
         
         
         
         
         
         
         
         
         
         
         
         
         
         
          {

          }
      ]
  }
]

/**
 * 根据对话id获取具体的对话信息
 * 
 * @param {*} id 对话id
 * @returns 
 */
function getDialog(id){
  const dialog = dialogs.filter(e => e.id === parseInt(id))
  if(dialog.length > 0){
    return dialog[0]
  }
  return null;
}
/**
 * 获取对话的简要信息
 */
function getDialogBriefs(){
  return dialogs.map(e => ({"id":e.id, "title": e.title}))
}
module.exports = {
  getDialog,
  getDialogBriefs
}
