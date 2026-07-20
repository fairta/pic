import mapData from 'https://cdn.jsdelivr.net/gh/fairta/pic@main/ming-map.json'
  assert { type: 'json' };

export function boot(moduleName) {
  if (moduleName === 'statusbar') {
    // 用 mapData 初始化你的状态栏
    console.log('用地图数据启动状态栏:', mapData);
    // 这里写你实际的初始化逻辑
  }
}