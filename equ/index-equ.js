function D(a, b, c){
	return (b * b) - 4 * a * c;
}

function firstkoren(a, b, d){
	return (-b + Math.sqrt(d)) / (2 * a);
}

function secondkoren(a, b, d){
	return (-b - Math.sqrt(d)) / (2 * a);
}

function equation(){
	var a = prompt("enter value a: ");
	var b = prompt("enter value b: ");
	var c = prompt("enter value c: ");
	var disk = D(a, b, c);
	if(a == 0 && b == 0 || a == 0 && b == 0 && c == 0)
	{
		alert("x в уравнении отсутствует");
	}
	else if(a == 0 && c == 0 || b == 0 && c == 0)
		{
			alert("x = 0");
		}
		else if (a == 0)
			{
				alert("x = " + (-c/b));
			}
			else if(b == 0)
			{
				if((-c/a) < 0)
				{
					disk = Math.sqrt(-disk) / 2 + "i";
					alert("x1 = " + (-b / 2 * a) + " + " + disk + "\n" + "x2 = " + (-b / 2 * a) + " - " + disk);
				}
				else
				{
					alert("x1 = " + sqrt((-c/a)) + "\n" + "x2 = " + -sqrt((-c/a)));
				}	
			}
			else if (disk > 0)
				{
					alert("x1 = " + firstkoren(a, b, disk) + "\n" + "x2 = " + secondkoren(a, b, disk));
				}

					else if (disk === 0)
						alert("x1 = " + (-b / (2 * a)));
					
					else
						{
							disk = Math.sqrt(-disk) / 2 + "i";
							alert("x1 = " + (-b / 2 * a) + " + " + disk + "\n" + "x2 = " + (-b / 2 * a) + " - " + disk);
						}
}
equation();