export type SeparatorBatchMode = 'fill' | 'step';
export type SeparatorSortMode = 'asc' | 'desc';
export type SeparatorStartMode = 'start' | 'end';

/**
 * Тип определяющий параметры базовых методов
 * 1. maxOperations     [default: 1000]     - количество операций за цикл
 * 2. batchSize         [default: 100]      - на какие батчи разбивать
 * 3. response          [default: true]    - нужно ли возвращать полный ответ в конце
 * 4. batchMode         [default: 'fill']   - режим работы батчера. 'fill' - срабатывает когда
 * заполняется. 'step' - после batchSize операций срабатывает вне зависимости от заполнености
 */
export type SeparatorOptions = {
    maxOperations?: number;
    batchSize?: number;
    batchMode?: SeparatorBatchMode;
    response?: boolean;
}

/**
 * Тип данных попадающих в батч callback
 * 1. items     - элементы в батче
 * 2. passed    - прошло операций
 * 3. all       - максимальное количество операций
 */
export type SeparatorBatchResponse<ItemType> = {
    items: ItemType[];
    passed: number;
    all: number;
}

/**
 * Функция callback которая срабатывает при достижения указанного в параметрах количества
 * элементов в батче.
 */
export type SeparatorBatchHandler<ItemType> = (response: SeparatorBatchResponse<ItemType>) => any;

/**
 * Тип ответа где мы работаем с одним элементом.
 * Первый элемент - index
 * Второй элемент - сам элемент
 */
export type SeparatorSingleItem<ItemType> = [ number, ItemType | null ];
