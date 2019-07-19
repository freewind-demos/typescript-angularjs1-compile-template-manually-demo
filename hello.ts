import angular, {ICompileService, IRootScopeService} from 'angular';

const $injector = angular.injector(['ng']);

$injector.invoke(($compile: ICompileService, $rootScope: IRootScopeService & { hello: string }) => {
  $rootScope.hello = 'Hello!!'
  const $dom = $compile('<div>{{ hello }} -- {{1+2}}</div>')($rootScope)
  // necessary to calculate the expressions
  $rootScope.$digest();

  document.getElementById('main')!.appendChild($dom[0]);
})
