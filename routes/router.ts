import { Router, Request, Response } from 'express';

const router = Router();

// (1) CONFIGURANDO LAS APIS
router.get('/mensajes',( req: Request, res: Response )=>{
    res.json({
        ok: true,
        mensaje : 'Todo esta bien!!!'
    });
});

router.post('/mensajes/:id',( req: Request, res: Response )=>{
    // (4) DEFINIR LOS PARAMETROS PARA LA API
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;

    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});

export default router;