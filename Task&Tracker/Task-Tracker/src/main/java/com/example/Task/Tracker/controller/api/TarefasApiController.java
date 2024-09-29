package com.example.Task.Tracker.controller.api;

import com.example.Task.Tracker.model.Tarefas;
import com.example.Task.Tracker.service.TarefasService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tarefas")
public class TarefasApiController {

    private final TarefasService tarefasService;

    public TarefasApiController(TarefasService tarefasService) {
        this.tarefasService = tarefasService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Tarefas>> buscarTarefas(@PathVariable Integer id) {
        return ResponseEntity.ok(tarefasService.getTarefasByUsuarioId(id));
    }

    @PostMapping()
    public ResponseEntity<Tarefas> salvarTarefas(@RequestBody Tarefas tarefas){
        return ResponseEntity.ok(tarefasService.save(tarefas));
    }

    @PostMapping("/concluirTarefa")
    public ResponseEntity<Void> concluiTarefa(@RequestParam Long idTarefa) {
        tarefasService.concluirTarefa(idTarefa);
        return ResponseEntity.ok(null);
    }
}
