// Parameter Decorator
type WatchParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
}
class Vehicle {
  move(@Watch speed: number) {}
}

console.log(watchedParameters);
