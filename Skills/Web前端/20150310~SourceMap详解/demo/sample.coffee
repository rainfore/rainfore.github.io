factorial = (num) ->
	if not /^\d+$/.test(num)
		throw 'Error: Not an integer!'

	_factorial = (num) ->
		return (if num <= 1 then 1 else num * _factorial(num - 1))

	return _factorial(num)

window.factorial = factorial