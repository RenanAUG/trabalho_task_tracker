package com.example.Task.Tracker.controller;

import com.example.Task.Tracker.model.Tarefas;
import com.example.Task.Tracker.model.Usuario;
import com.example.Task.Tracker.repository.UsuarioRepository;
import com.example.Task.Tracker.service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping()
    public ResponseEntity<Usuario> salvarUsuario(@RequestBody Usuario usuario){
        return ResponseEntity.ok(usuarioService.save(usuario));
    }

    @GetMapping()
    public ResponseEntity<List<Usuario>> buscarTarefas() {
        return ResponseEntity.ok(usuarioService.listar());
    }

}
