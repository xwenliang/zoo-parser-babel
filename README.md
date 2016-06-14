# Babel for fis-zoo

```javascript
    roadmap: {
        path: [
            {
                reg: /^\/modules\/([^\/]+)\/(?:[^\/]+)\.js$/i,
                isMod: true,
                id: '$1',
                //开启下面这条配置
                isES6: true
            }
        ]
    }
```