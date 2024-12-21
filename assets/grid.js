/**
 * author: B22042127袁非
 * 游戏网格的相关函数
 * 包括获取随机位置，判断是否越界，是否与墙壁相撞等
 * 设计接口初始化网格以被ai路径算法调用
 */

const GRID_SIZE = 41;

let grid = Array.from(
    {length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0)
    );

const getRandomPosition = () => {
    return {x:Math.floor(Math.random() * (GRID_SIZE-3)+1), 
            y: Math.floor(Math.random() * (GRID_SIZE-3)+1)
        };
}

const isOutOfBounds = (position) => {
    return position.x < 2 || position.x > GRID_SIZE 
        || position.y < 2 || position.y > GRID_SIZE;
}


const isTouchingWalls = (position) => {
    return walls.some(wall => wall.x === position.x 
        && wall.y === position.y);
}

// 将墙壁和蛇身体位置标记为不可通行
const initializeGrid = () => {
    for (let i = 1; i < GRID_SIZE; i++) {
        for (let j = 1; j < GRID_SIZE; j++) {
            grid[i][j] = 0; // 0 表示可通行
        }
    }
    AIsnakeBody.forEach(segment => {
        grid[segment.x][segment.y] = 1; // 1 表示蛇的身体
    });
    walls.forEach(wall => {
        grid[wall.x][wall.y] = 1; // 1 表示墙壁
    });
    snakeBody.forEach(segment => {
        grid[segment.x][segment.y] = 1; // 1 表示蛇的身体
        
    });
    grid[Food.x][Food.y] = 0; // 0 表示食物
}
