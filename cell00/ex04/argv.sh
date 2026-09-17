if [ "$#" -eq 0 ]; then
    echo "Erro: nenhum argumento fornecido."
    exit 1
fi

echo "$1"
if [ -n "$2" ]; then
	echo "$2"
fi

if [ -n "$3" ]; then
        echo "$3"
fi

