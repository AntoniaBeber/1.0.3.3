const alunos = [
        {
            nome: 'Holden',
            nota: 10,
            cadeira: [
                {
                    nome: 'Ingles',
                    nota: 10,
                },
                {
                    nome: 'Historia',
                    nota: 0,
                }
            ]
         
        
        },
        {
            nome: 'Hannibal',
            cadeira: [
                {
                    nome: 'Seguranca Alimentar',
                    nota: 10,
                },
                {
                    nome: 'Introducao a Psicologia',
                    nota: 10,
                },
            ]
        } ,
        {
            nome: 'Todd Anderson',
            cadeira: [
                {
                    nome: 'Quimica',
                    nota: 7,
                },
                {
                    nome: 'Literatura',
                    nota: 10,
                }
            ]
        },
        {
            nome: 'Sherlock',
            cadeira: [
                {
                    nome: 'Matematica',
                    nota: 10,
                },
                {
                    nome: 'Quimica',
                    nota: 10,
                }
            ]


        
        }
    ];

    function gerarMedia(aluno){
        const cadeira = aluno.cadeira;
        let _nota = 0;
        for(let cadeira of cadeiras){
            const nota = cadeira.nota;
            _nota += nota;
        }
        _nota = _nota / cadeira.length;
        aluno.mediaGeral = _nota
        return aluno;
    }


    console.log(gerarMedia(alunos[]))



