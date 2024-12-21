# 贪吃蛇AI对战网页项目

一个贪吃蛇游戏网页项目，具有经典的贪吃蛇玩法，同时加入了AI对战功能。用户可以选择是否与AI蛇进行对战，并根据自己的需求调整游戏参数、AI难度和其他选项

## 功能概述

- **经典贪吃蛇**：基础贪吃蛇游戏玩法。
- **AI对战模式**：增加AI控制的蛇，使用A*路径规划算法找到最优路径。
- **多关卡设计**：包含3个难度递增的关卡，每个关卡设有不同的障碍布局。
- **可调游戏参数**：实时分数显示，难度选择等。
- **暂停和继续**：可以随时暂停游戏。

## 技术栈

- **前端**：HTML、CSS、JavaScript
- **算法**：A*搜索算法、贪婪算法以及BFS算法，用于AI蛇路径规划；包括障碍物和避障功能

## 安装与运行
    
1. **打开HTML文件**
使用浏览器打开`index.html`文件即可运行游戏。

## 文件结构

```bash
|-- index.html             # 主页面文件
|-- style.css              # CSS样式文件
|-- assets/                # 存储图片、声音等资源
|   |-- game.js            # 主要游戏逻辑
|   |-- snake.js           # 蛇类
|   |-- food.js            # 食物类
|   |-- aisnake.js         # AI类
|   |-- aidirection.js     # A*算法
|   |-- aidirection_t.js   # 贪婪算法、BFS算法
|   |-- keyboard.js        # 键盘输入
|   |-- sidebar.js         # 侧边栏
|   |-- level.js           # 关卡管理
|   |-- gird.js            # 游戏网格管理
|-- README.md              # 项目说明文件

```

## 使用说明

### 操作方式

- 使用箭头键控制玩家蛇的移动。
- 在左侧任务栏选择“AI对战”模式并选择AI的难度级别。
- 左侧展示栏提供其他游戏选项，可以切换关卡和游戏类型。

### 游戏模式

1. **经典模式**：仅玩家蛇在游戏中移动。
2. **AI对战模式**：加入AI蛇，使用A*算法智能寻路，提供不同的AI难度选择。

### 功能按钮

- **暂停/继续**：点击暂停按钮来暂停游戏，再次点击继续。
- **关卡切换**：选择不同关卡，体验不同障碍布局。

## 核心算法

### A* 算法

AI蛇采用A*路径规划算法，结合曼哈顿距离估值，确保其能在最短路径内找到目标食物，同时避免障碍和自身碰撞。

### 数据结构

1. **蛇身体**：使用数组存储每个蛇节的坐标。
2. **游戏网格**：使用二维数组存储各个节点状态（空、障碍、食物等）。

## 项目亮点与难点

- **亮点**：
    - 采用A*算法实现AI路径规划，确保蛇的灵活避障和追踪。
    - 可自由切换不同难度关卡。
    - 用户界面简洁且提供丰富功能选项。
- **难点**：
    - 动态障碍和AI路径重规划的实现。
    - 在大量网格计算时的性能优化。

## 未来改进方向

- 增加AI蛇的动态难度调整机制。
- 增加排行榜等社交元素。
- 增加移动端适配。
- 增加数据库储存上次游戏记录。

## 贡献

欢迎对本项目提出意见或贡献代码！请提交Pull Request或在Issue中反馈。

| 文件名          | 负责人       | 文件内容                                                         |
|-----------------|--------------|------------------------------------------------------------------|
| `index.html`    | 袁非         | 页面主结构，包含游戏区域和侧边栏等整体布局                     |
| `style.css`     | 袁非         | 页面样式设计，布局、配色、字体等，包括任务栏和游戏区的样式       |
| `game.js`       | 袁非，童吉吉  | 对于游戏主循环的控制实现              |
| `snake.js`         | 袁非；童吉吉：添加部分功能        | 玩家控制的蛇的设计主要包含蛇的位置更新、蛇的绘制、蛇的碰撞检测、吃食物的加长、玩家游戏结束的判断、重置蛇的属性、玩家的计分。童吉吉：添加玩家蛇与ai蛇之间的碰撞             |
| `aisnake.js`     | 袁非；童吉吉：添加部分功能         |  * ai蛇的实现。区别于玩家蛇的地方，是在更新时使用路径算法的接口获取下一位置。童吉吉：添加ai蛇与玩家蛇之间的碰撞                 |
| `food.js`   | 袁非         | 食物的实现。包括食物的位置、更新食物位置、绘制食物、随机生成食物位置。含有对蛇吃到食物的判断与处理           |
| `bigfood.js`      | 童吉吉         | 大食物的实现。区别于普通食物，是定时刷新的                             |
| `level.js`       | 袁非         | 游戏关卡的设置。包括墙的设置                        |
| `keyboard.js`     | 袁非；童吉吉：添加部分功能         | 处理键盘输入。包括方向键控制蛇的移动，以及长按shift键加速，还有暂停/继续游戏的快捷键。童吉吉： 添加shift键加速功能，游戏暂停功能             |
| `aidirection.js`       | 袁非         | A*算法的实现       
| `aidirection_t.js`       | 童吉吉         | 贪婪算法、BFS、DFS算法的实现      
| `sidebar.js`       | 袁非；童吉吉         | 实现网页侧边栏功能。包括开始游戏、暂停游戏、选择难度、AI开关。童吉吉：添加暂停游戏按钮,定时器的添加 
| `grid.js`       | 袁非         | 游戏网格的相关函数。包括获取随机位置，判断是否越界，是否与墙壁相撞等。设计接口初始化网格以被ai路径算法调用                                          |
