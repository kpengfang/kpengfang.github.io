# git-reset vs git-checkout

> “HEAD” 一列中的 “REF” 表示该命令移动了 HEAD 指向的分支引用，
> 而`‘HEAD’' 则表示只移动了 HEAD 自身。   
> :exclamation: **特别注意 WD Safe? 一列 - 如果它标记为 :skull_and_crossbones: ，请慎用。**

|                            | HEAD       | Index | Workdir | WD Safe?               |
| -------------------------- | ---------- | :---: | :-----: | :--------------------: |
| **Commit Level**           |            |       |         |                        |
| *reset --soft [commit]*    | :o: (REF)  |       |         |                        |
| *reset [commit]*           | :o: (REF)  | :o:   |         |                        |
| *reset --hard [commit]*    | :o: (REF)  | :o:   | :o:     | :skull_and_crossbones: |
| *checkout [commit]*        | :o: (HEAD) | :o:   | :o:     |                        |
| **File Level**             |            |       |         |                        |
| *reset (commit) [file]*    |            | :o:   |         |                        |
| *checkout (commit) [file]* |            | :o:   | :o:     | :skull_and_crossbones: |

