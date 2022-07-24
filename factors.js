function printNumbers(n)
{
	let i = 2; i * i <= n;
	let j = 3; j * j <= n;
	let k = 4; k * k <= n;
	let l = 5; l * l <= n;
	if (n % i == 0)
		return (n / i) + "*" + i
	else if (n % j == 0)
		return (n / j) + "*" + j
	else if (n % k == 0)
		return (n / k) + "*" + k
	else if (n % l == 0)
		return (n / l) + "*" + l
}
printNumbers()
