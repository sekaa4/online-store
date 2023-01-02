import { ConstantsDom } from '../models/Dom';
import { createElement } from '../components/elements/generateElement';
import { CreateElementParams } from '../interfaces/CreateElementParams';

export default function createDescription<T extends typeof HTMLElement>(
  interfaceTagName: T,
  objParams: CreateElementParams = {}
): InstanceType<T> {
  const elem: InstanceType<T> = createElement(ConstantsDom.H3, interfaceTagName, objParams);

  return elem;
}
