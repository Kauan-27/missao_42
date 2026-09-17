if [ "$#" -eq 0 ]; then
	echo "Erro: Nenhum argumento informado!"
	exit 1
fi

for i in $@; do
mkdir "ex$i"
done
